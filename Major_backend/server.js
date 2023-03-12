const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

const { pool } = require("./connection")

pool.connect((err, res) => {
    if (err) throw err;
    console.log("Connected successfully...");
})

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
    console.log("Get request...");
    res.send({
        message: "Success get request..."
    })
})


app.get("/sample", (req, res) => {
    console.log("Sample table");

    h1 = "select * from sample";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request sample table",
            data: results.rows
        })
        console.log(results);
    })
})


app.get("/product", (req, res) => {
    console.log("get request product table");

    h1 = "select * from product";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "success get request product table",
            data: results.rows
        })
        console.log(results);
    })
})

app.post("/product", (req, res) => {
    console.log("post request product table");

    const name = req.body.product_name;
    const brand = req.body.product_brand;
    const price = req.body.product_price;
    const type = req.body.product_type;
    const description = req.body.product_description;

    h1 = "Insert into product(product_name, product_brand, product_price, product_type, product_description) values($1, $2, $3, $4, $5)";

    pool.query(h1, [name, brand, price, type, description], (err, results) => {
        if (err) throw err;

        res.send({
            message: "Inserted in product table...",
            data: results
        })

        console.log(results.rows);
    })
})

app.get("/product_seeds", (req, res) => {
    console.log("get seeds request product table");

    h1 = "select * from product where product_type = 'Seeds'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get seeds request product table",
            data: results.rows
        })
        console.log(results);
    })
})

app.get("/product_foods", (req, res) => {
    console.log("get foods request product table");

    h1 = "select * from product where product_type = 'Foods'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get foods request product table",
            data: results.rows
        })
        console.log(results);
    })
})
app.get("/product_grains", (req, res) => {
    console.log("get grains request product table");

    h1 = "select * from product where product_type = 'Grains'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get grains request product table",
            data: results.rows
        })
        console.log(results);
    })
})
app.get("/product_machinery", (req, res) => {
    console.log("get machinery request product table");

    h1 = "select * from product where product_type = 'Machinery'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get machinery request product table",
            data: results.rows
        })
        console.log(results);
    })
})

app.get("/product_pesticides", (req, res) => {
    console.log("get pesticides request product table");

    h1 = "select * from product where product_type = 'Pesticides'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get pesticides request product table",
            data: results.rows
        })
        console.log(results);
    })
})

// Crops table 

app.get("/crops", (req, res) => {
    console.log("get request crops table");

    h1 = "select * from crop";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request crops table",
            data: results.rows
        })
        console.log(results);
    })
})

app.post("/crops", (req, res) => {
    console.log("post request crops table");

    let crops_name = req.body.crops_name;
    const crops_type = req.body.crops_type;
    const crops_about = req.body.crops_about;
    const crops_climate = req.body.crops_climate;
    const crops_history = req.body.crops_history;
    const crops_soil = req.body.crops_soil;
    const crops_nutrition = req.body.crops_nutrition;
    const crops_fertilizer = req.body.crops_fertilizer;
    const crops_commercial = req.body.crops_commercial;

    let name = crops_name.toLowerCase();

    h1 = "Insert into crop(name, crop_type, about, climate, history, soil, nutrition, fertilizer, commercial) values($1, $2, $3, $4, $5, $6, $7, $8, $9)";

    pool.query(h1, [name, crops_type, crops_about, crops_climate, crops_history, crops_soil, crops_nutrition, crops_fertilizer, crops_commercial], (err, results) => {
        if (err) throw err;

        res.send({
            message: "Inserted in crops table...",
            data: results
        })

        // console.log(results.rows);
    })
})

// testing wheat rabi

app.get("/crops_rabi", (req, res) => {
    // console.log("get request crops rabi table");

    h1 = "select * from crop where name = 'Wheat'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request crops rabi table",
            data: results.rows
        })
        // console.log(results);
    })
})

// crops type links 
app.get("/rabi_links", (req, res) => {
    // console.log("get request crops rabi_links table");

    h1 = "select name from crop where crop_type='Rabi'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request crops rabi_links table",
            data: results.rows
        })
        // console.log(results);
    })
})

app.get("/kharif_links", (req, res) => {
    // console.log("get request crops kharif_links table");

    h1 = "select name from crop where crop_type='Kharif'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request crops kharif_links table",
            data: results.rows
        })
        // console.log(results);
    })
})

app.get("/zaid_links", (req, res) => {
    // console.log("get request crops zaid_links table");

    h1 = "select name from crop where crop_type='Zaid'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request crops zaid_links table",
            data: results.rows
        })
        // console.log(results);
    })
})

// get single data crops

app.get("/Crops_details/:name", (req, res) => {
    // console.log("name => ", req.params.name);

    const crops_name = req.params.name;
    h1 = "select * from crop where name = $1";
    pool.query(h1, [crops_name], (err, results) => {
        if (err) throw err;
        res.send({
            message: "Success get single data request in crops details",
            data: results.rows
        })
        // console.log(results);
    })
})

// crop Delete Details .
app.delete("/delete_crops_details/:name", (req, res) => {
    // console.log("name => ", req.params.name);

    const name = req.params.name;

    h1 = "Delete from crop where name = $1";
    pool.query(h1, [name], (err, results) => {
        if (err) throw err;
        res.send({
            message: "Success delete in crop details",
            data: results.rows
        })
        console.log(results.rows);
    })
})

// product Delete Details .
app.delete("/product_details/:product_name", (req, res) => {
    // console.log("name => ", req.params.name);

    const product_name = req.params.product_name;

    h1 = "Delete from product where product_name = $1";
    pool.query(h1, [product_name], (err, results) => {
        if (err) throw err;
        res.send({
            message: "Success delete in product details",
            data: results.rows
        })
        console.log(results.rows);
    })
})

// get name and crops type from crops table 

// app.get("/crops_name", (req, res) => {
//     // console.log("name => ", req.params.name);

//     const crops_name = req.params.name;
//     h1 = "select * from crop ";
//     pool.query(h1, [crops_name], (err, results) => {
//         if (err) throw err;
//         res.send({
//             message: "Success get single data request in crops details",
//             data: results.rows
//         })
//         console.log(results);
//     })
// })

// Commit information agent table 

// agent table get and post request 

app.get("/agent_commit", (req, res) => {
    console.log("get request commit agent table");

    h1 = "select * from agent_commit";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request commit agent table",
            data: results.rows
        })
        // console.log(results);
    })
})

app.post("/agent_commit", (req, res) => {
    console.log("post request Agent commit table");

    const name = req.body.name;
    const email = req.body.email;
    const insert = req.body.insert;
    const type = req.body.type;
    const message = req.body.message;

    h1 = "Insert into agent_commit(name, email, insert, type, message) values($1, $2, $3, $4, $5)";

    pool.query(h1, [name, email, insert, type, message], (err, results) => {
        if (err) throw err;

        res.send({
            message: "Inserted in Agent commit table...",
            data: results
        })
        // console.log(results.rows);
    })
})


app.get("/schemes", (req, res) => {
    console.log("get request schemes table");

    h1 = "select * from schemes";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request schemes table",
            data: results.rows
        })
        // console.log(results);
    })
})

app.post("/schemes", (req, res) => {
    console.log("post request Schemes table");

    const name = req.body.name;
    const description = req.body.description;

    const scheme_name = name.toUpperCase();
    h1 = "Insert into schemes(name, description) values($1, $2)";

    pool.query(h1, [scheme_name, description], (err, results) => {
        if (err) throw err;

        res.send({
            message: "Inserted in Schemes table...",
            data: results
        })
        // console.log(results.rows);
    })
})

// single crops details from search input 

app.get("/single_crops_details/:name", (req, res) => {
    // console.log("name => ", req.params.name);

    // const crops_name = req.params.name;
    const crops_name = req.body.crop_name;

    h1 = "select * from crop where name = $1";
    pool.query(h1, [crops_name], (err, results) => {
        if (err) throw err;
        res.send({
            message: "Success get single data request...",
            data: results.rows
        })
        console.log(results);
    })
})

// get single schemes Details 

app.get("/single_schemes_details/:id", (req, res) => {
    // const scheme_name = req.body.name;

    const scheme_id = req.params.id;
    h1 = "select * from schemes where id = $1";

    pool.query(h1, [scheme_id], (err, results) => {
        if (err) throw err;
        res.send({
            message: "Single data schemes",
            data: results.rows
        })
        console.log(results.rows);
    })
})


// count function admin crops, product, schemes

app.get("/crops_count", (req, res) => {
    console.log("get request Crops Counts table");

    h1 = "select count(*) from crop";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request Crops Count table",
            data: results.rows
        })
        // console.log(results);
    })
})

app.get("/crops_count_rabi", (req, res) => {
    console.log("get request Crops Counts table");

    h1 = "select count(*) from crop where crop_type = 'Rabi'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request Crops Count table",
            data: results.rows
        })
        // console.log(results);
    })
})

app.get("/crops_count_kharif", (req, res) => {
    console.log("get request Crops Counts table");

    h1 = "select count(*) from crop where crop_type = 'Kharif'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request Crops Count table",
            data: results.rows
        })
        // console.log(results);
    })
})

app.get("/crops_count_zaid", (req, res) => {
    console.log("get request Crops Counts table");

    h1 = "select count(*) from crop where crop_type = 'Zaid'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request Crops Count table",
            data: results.rows
        })
        // console.log(results);
    })
})

//product Count table count function 

app.get("/product_count", (req, res) => {
    console.log("get request product Counts table");

    h1 = "select count(*) from product";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request product Count table",
            data: results.rows
        })
        // console.log(results);
    })
})


app.get("/product_foods_count", (req, res) => {
    console.log("get request product Counts table");

    h1 = "select count(*) from product where product_type = 'Foods'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request product Count table",
            data: results.rows
        })
        // console.log(results);
    })
})


app.get("/product_grains_count", (req, res) => {
    console.log("get request product Counts table");

    h1 = "select count(*) from product where product_type = 'Grains'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request product Count table",
            data: results.rows
        })
        // console.log(results);
    })
})


app.get("/product_seeds_count", (req, res) => {
    console.log("get request product Counts table");

    h1 = "select count(*) from product where product_type = 'Seeds'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request product Count table",
            data: results.rows
        })
        // console.log(results);
    })
})


app.get("/product_machinery_count", (req, res) => {
    console.log("get request product Counts table");

    h1 = "select count(*) from product where product_type = 'Machinery'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request product Count table",
            data: results.rows
        })
        // console.log(results);
    })
})


app.get("/product_pesticides_count", (req, res) => {
    console.log("get request product Counts table");

    h1 = "select count(*) from product where product_type = 'Pesticides'";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request product Count table",
            data: results.rows
        })
        // console.log(results);
    })
})

// schemes table count function 


app.get("/schemes_count", (req, res) => {
    console.log("get request schemes Counts table");

    h1 = "select count(*) from schemes";

    pool.query(h1, [], (err, results) => {
        if (err) throw err;
        res.send({
            message: "sucess get request schemes Count table",
            data: results.rows
        })
        // console.log(results);
    })
})

app.listen(1000, (err) => {
    if (err) throw err;

    console.log("Success port connectivity...");
})