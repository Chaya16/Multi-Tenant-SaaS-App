var express = require('express');
var router = express.Router();
var mysql = require('./database');


var submitGrades1 = function (req, res) {
    console.log("Submitting Grades");

    console.log(req.body);

    var TenantInsertQuery = "INSERT INTO "+req.body.tenant_table+"( PointsScale_5 , Points_5 , Complete, Comments) VALUES ('" +
        req.body.scale +
        "','" + req.body.grade +
        "','" + req.body.complete +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant details is: " + TenantInsertQuery);

    mysql.fetchData(function(err, results) {

        if (err) {
            throw err;
        } else {
            if (results.length > 0) {

                console.log("Error");
                var json_responses = {
                    "statusCode" : 200
                };
                res.send(json_responses);

            } else {

                console.log("Data inserted!");
                json_responses = {
                    "statusCode" : 401
                };
                insertTenantDataForT1(req);
                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var insertTenantDataForT1 = function (req) {

    var InsertTenantData = "INSERT INTO tenant_data ( tenant_id , tenant_table, column_1, column_2, column_3, column_4 ) " +
        " VALUES ('" + "T1" +
        "','" + req.body.tenant_table +
        "','" +req.body.scale +
        "','" + req.body.grade +
        "','" + req.body.complete +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant data is: " + InsertTenantData);

    mysql.fetchData(function(err, results) {
    },InsertTenantData);
};

var submitGrades2 = function (req, res) {
    console.log("Submitting Grades");

    console.log(req.body);

    var TenantInsertQuery = "INSERT INTO "+req.body.tenant_table+"( LetterGrade , Grade , Complete , Comments) VALUES ('" +
        req.body.scale +
        "','" + req.body.grade +
        "','" + req.body.complete +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant details is: " + TenantInsertQuery);

    mysql.fetchData(function(err, results) {

        if (err) {
            throw err;
        } else {
            if (results.length > 0) {

                console.log("Error");
                var json_responses = {
                    "statusCode" : 200
                };
                res.send(json_responses);

            } else {

                console.log("Data inserted!");
                json_responses = {
                    "statusCode" : 401
                };
                insertTenantDataForT2(req);
                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var insertTenantDataForT2 = function (req) {

    var InsertTenantData = "INSERT INTO tenant_data ( tenant_id , tenant_table, column_1, column_2, column_3, column_4 ) " +
        " VALUES ('" + "T2" +
        "','" + req.body.tenant_table +
        "','" +req.body.scale +
        "','" + req.body.grade +
        "','" + req.body.complete +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant data is: " + InsertTenantData);

    mysql.fetchData(function(err, results) {
    },InsertTenantData);
};

var submitGrades3 = function (req, res) {
    console.log("Submitting Grades");

    console.log(req.body);

    var TenantInsertQuery = "INSERT INTO "+req.body.tenant_table+"( PercentGrade , Percent , Complete, Comments) VALUES ('" +
        req.body.scale +
        "','" + req.body.grade +
        "','" + req.body.complete +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant details is: " + TenantInsertQuery);

    mysql.fetchData(function(err, results) {

        if (err) {
            throw err;
        } else {
            if (results.length > 0) {

                console.log("Error");
                var json_responses = {
                    "statusCode" : 200
                };
                res.send(json_responses);

            } else {

                console.log("Data inserted!");
                json_responses = {
                    "statusCode" : 401
                };
                insertTenantDataForT3(req);
                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var insertTenantDataForT3 = function (req) {

    var InsertTenantData = "INSERT INTO tenant_data ( tenant_id , tenant_table, column_1, column_2, column_3, column_4 ) " +
        " VALUES ('" + "T3" +
        "','" + req.body.tenant_table +
        "','" +req.body.scale +
        "','" + req.body.grade +
        "','" + req.body.complete +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant data is: " + InsertTenantData);

    mysql.fetchData(function(err, results) {
    },InsertTenantData);
};

var submitGrades4 = function (req, res) {
    console.log("Submitting Grades");

    console.log(req.body);

    var TenantInsertQuery = "INSERT INTO "+req.body.tenant_table+"( PointsScale_10 , Points_10  , Complete, Comments) VALUES ('" +
        req.body.scale +
        "','" + req.body.grade +
        "','" + req.body.complete +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant details is: " + TenantInsertQuery);

    mysql.fetchData(function(err, results) {

        if (err) {
            throw err;
        } else {
            if (results.length > 0) {

                console.log("Error");
                var json_responses = {
                    "statusCode" : 200
                };
                res.send(json_responses);

            } else {

                console.log("Data inserted!");
                json_responses = {
                    "statusCode" : 401
                };
                insertTenantDataForT4(req);
                res.send(json_responses);

            }
        }
    }, TenantInsertQuery);
};

var insertTenantDataForT4 = function (req) {

    var InsertTenantData = "INSERT INTO tenant_data ( tenant_id , tenant_table, column_1, column_2, column_3, column_4 ) " +
        " VALUES ('" + "T4" +
        "','" + req.body.tenant_table +
        "','" +req.body.scale +
        "','" + req.body.grade +
        "','" + req.body.complete +
        "','" + req.body.gradecomments +"')";

    console.log("QUERY to enter tenant data is: " + InsertTenantData);

    mysql.fetchData(function(err, results) {
    },InsertTenantData);
};

module.exports = {
    submitGrades1 , submitGrades2 , submitGrades3 , submitGrades4
};