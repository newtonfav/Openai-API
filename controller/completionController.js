const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config({
  path: "./config.env",
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = async function (req) {
  const res = await openai.createCompletion(req);
  return res;
};

exports.complete = async (req, res) => {
  const resp = await response(req.body);
  const completion = resp.data.choices;

  res.status(200).json({
    status: "success✈️",
    data: {
      completion,
    },
  });
};
