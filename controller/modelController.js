const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config({
  path: "./config.env",
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = async function () {
  const res = await openai.listModels();
  return res.data;
};

exports.getModels = async (req, res) => {
  const models = await response();
  res.status(200).json({
    status: "success✈️",
    data: {
      models,
    },
  });
};

exports.getModel = async (req, res) => {
  const param = req.params.id;
  let data;

  const models = await response();
  models.data.map((el) => {
    if (el.id == param) {
      data = el;
    }
  });

  res.status(200).json({
    status: "success✈️",
    data: {
      data,
    },
  });
};
