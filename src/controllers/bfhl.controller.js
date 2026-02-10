const math = require("../utils/math.utils");
const { askAI } = require("../utils/ai.utils");
exports.handleBFHL = async (req, res) => {
  try {
    const body = req.body;
    const key = Object.keys(body)[0];
    if (!key) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid request"
      });
    }
    let data;
    switch (key) {
      case "fibonacci":
        data = math.fibonacci(body[key]);
        break;

      case "prime":
        data = math.primes(body[key]);
        break;

      case "lcm":
        data = math.lcm(body[key]);
        break;

      case "hcf":
        data = math.hcf(body[key]);
        break;
      case "AI":
        data = await askAI(body[key]);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          message: "Invalid key"
        });
    }
    res.status(200).json({
      is_success: true,
      officialemail: "upasana@chitkara.edu.in",
      data
    });

  } catch (err) {
    res.status(500).json({
      is_success: false,
      message: "Processing failed"
    });
  }
};
