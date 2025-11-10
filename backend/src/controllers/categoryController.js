const fs = require("fs");

const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/categories.json`, "utf-8")
);

exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > categories.length) {
    console.log(`Category id is: ${val}`);
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.title || !req.body.slug) {
    return res.status(400).json({
      status: "fail",
      message: "Missing title or slug",
    });
  }
  next();
};

//Route handlers
exports.getCategory = (req, res) => {
  //console.log(req.params);
  const id = Number(req.params.id);

  // Re-read the file (debug only)
  const categories = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/categories.json`, "utf-8")
  );

  //console.log("Categories length:", categories.length);
  //   console.log(
  //     "IDs:",
  //     categories.map((c) => c.id)
  //   );
  //   console.log(
  //     "Type of el.id:",
  //     typeof categories[0].id,
  //     "| Type of id:",
  //     typeof id
  //   );

  const category = categories.find((el) => Number(el.id) === id);

  res.status(200).json({
    data: { category },
  });
};

exports.getAllCategories = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: categories.length,
    data: {
      categories,
    },
  });
};

exports.createCategory = (req, res) => {
  const newId = categories[categories.length - 1].id + 1;
  const newCategory = Object.assign({ id: newId }, req.body);

  categories.push(newCategory);

  fs.writeFile(
    `${__dirname}/src/data/categories.json`,
    JSON.stringify(categories),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          category: newCategory,
        },
      });
    }
  );
};

exports.updateCategory = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      category: "<Updated category here...>",
    },
  });
};

exports.deleteCategory = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
