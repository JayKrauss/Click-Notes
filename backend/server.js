import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import Form from './form';

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// route for the database- note that it contains our DB password, so it is not secure.
const dbRoute = 'mongodb+srv://admin:Trilogy2019@cluster0-9twgc.mongodb.net/test?retryWrites=true';

// connects to the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// :get method to fetch
router.get('/getForm', (req, res) => {
  Form.find((err, Form) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, Form: Form });
  });
});

// :update method to change
router.post('/updateForm', (req, res) => {
  const { id, update } = req.body;
  Form.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// :delete method to remove
router.delete('/deleteForm', (req, res) => {
  const { id } = req.body;
  Form.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// :post method to create
router.post('/postForm', (req, res) => {
  let Form = new Form();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUT'
    });
  }
  Form.message = message;
  Form.id = id;
  Form.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use('/api', router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
