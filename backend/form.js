const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our database's form structure 
const formSchema = new Schema(
  {
    id: Number,
    candidateName: { type: String, required: true },
    candidateSchool: { type: String, required: true },
    candidateProgram: { type: String, required: true },
    candidateScore: { type: Number, required: true },
    candidateBasics: [{personable:{ type: Boolean, required: false }},{passionate:{ type: Boolean, required: false }},{prepared:{ type: Boolean, required: false }},{professional:{ type: Boolean, required: false }},{knowledgable:{ type: Boolean, required: false }},{engaged:{ type: Boolean, required: false }},{coachable:{ type: Boolean, required: false }},{comprehensable:{ type: Boolean, required: false }}],
    candidatePositives: [{empathized:{ type: Number, required: false}},{encouraged:{ type: Number, required: false}},{validated:{ type: Number, required: false}},{askedGoal:{ type: Number, required: false}},{openedConsole:{ type: Number, required: false}},{usedSearch:{ type: Number, required: false}},{leadingQuestion:{ type: Number, required: false}},{explainItBack:{ type: Number, required: false}},{offeredFollowUp:{ type: Number, required: false}},{checkedUnderstanding:{ type: Number, required: false}},{studentReadError:{ type: Number, required: false}},{studentExplainedError:{ type: Number, required: false}},{qualityExplanation:{ type: Number, required: false}},{explainedResource:{ type: Number, required: false}},{comparedOwnCode:{ type: Number, required: false}},{comparedOnlineCode:{ type: Number, required: false}},{wisdom:{ type: Number, required: false}},{formatting:{ type: Number, required: false}},{adapted:{ type: Number, required: false}}],
    candidateNegatives: [{apathetic:{ type: Number, required: false}},{discouraging:{ type: Number, required: false}},{disinterested:{ type: Number, required: false}},{profanity:{ type: Number, required: false}},{fumble:{ type: Number, required: false}},{falseInfo:{ type: Number, required: false}},{minorSilence:{ type: Number, required: false}},{tooComplex:{ type: Number, required: false}},{rabbitHole:{ type: Number, required: false}},{readError:{ type: Number, required: false}},{explainedError:{ type: Number, required: false}},{errorLocation:{ type: Number, required: false}},{notUsingConsole:{ type: Number, required: false}},{wrongChange:{ type: Number, required: false}},{extraFormatting:{ type: Number, required: false}},{ignoredConfusion:{ type: Number, required: false}},{ignoredSelfDoubt:{ type: Number, required: false}},{confused:{ type: Number, required: false}}],
    candidateRedFlags: [{CDN:{type:Boolean, required: false}},{silences:{type:Boolean, required: false}},{answers:{type:Boolean, required: false}},{responses:{type:Boolean, required: false}},{changes:{type:Boolean, required: false}},{other:{type:Boolean, required: false}}],
    errorSummary: [{jQueryCDN: {type:Boolean, required: false}},{CDNOrder: {type:Boolean, required: false}},{alertSyntax: {type:Boolean, required: false}},{docReady: {type:Boolean, required: false}},{buttonOn: {type:Boolean, required: false}},{eventDelegation: {type:Boolean, required: false}},{poorFormatting: {type:Boolean, required: false}},{missingSemicolons: {type:Boolean, required: false}}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);