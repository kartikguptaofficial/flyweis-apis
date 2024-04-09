const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    const errName = err.name;
    let errMessage = err.message;

    console.error({ errName });
    if (!errMessage) errMessage = err;

    if (errName === "CastError") {
      return res.status(400).json({
        success: false,
        level: "high",
        message: "Invalid payload",
        error: err?.message,
      });
    }

    if (errName === "ErrorWarning") {
      return res.status(200).json({
        success: false,
        level: "warning",
        message: errMessage,
        data: err?.public_data,
      });
    }

    if (errName === "InvalidPayload") {
      return res.status(400).json({
        success: false,
        level: "high",
        message: errMessage,
        data: err?.public_data,
        error: err?.error,
      });
    }

    console.error("CaughtError:", err);
    console.error("ErrorStack:", err.stack);
    console.error("ErrorPayload:", JSON.stringify(req.body));
    console.error("ErrorParams:", req.params);
    console.error("--------------------xxxxxx--------------------");
    console.error(err.stack);

    let responseStatusCode = 500;
    if (err.statusCode) responseStatusCode = err.statusCode;

    // Sentry.captureException(err, {
    //     req: req,
    // });

    try {
      errMessage = JSON.parse(errMessage);
      errMessage = errMessage.map((ex) => ex.message).join(",");
    } catch (e) {}

    return res.status(responseStatusCode).json({
      success: false,
      message: errMessage,
    });
  });
};

export { catchAsync };
