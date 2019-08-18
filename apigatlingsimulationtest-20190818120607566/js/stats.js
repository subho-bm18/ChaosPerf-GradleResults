var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "-",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "7208",
        "ok": "-",
        "ko": "7208"
    },
    "meanResponseTime": {
        "total": "75",
        "ok": "-",
        "ko": "75"
    },
    "standardDeviation": {
        "total": "320",
        "ok": "-",
        "ko": "320"
    },
    "percentiles1": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles2": {
        "total": "87",
        "ok": "-",
        "ko": "87"
    },
    "percentiles3": {
        "total": "116",
        "ok": "-",
        "ko": "115"
    },
    "percentiles4": {
        "total": "146",
        "ok": "-",
        "ko": "146"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "243.902",
        "ok": "-",
        "ko": "243.902"
    }
},
contents: {
"req_addorder-api-7eadd": {
        type: "REQUEST",
        name: "AddOrder-API",
path: "AddOrder-API",
pathFormatted: "req_addorder-api-7eadd",
stats: {
    "name": "AddOrder-API",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "-",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "7208",
        "ok": "-",
        "ko": "7208"
    },
    "meanResponseTime": {
        "total": "75",
        "ok": "-",
        "ko": "75"
    },
    "standardDeviation": {
        "total": "320",
        "ok": "-",
        "ko": "320"
    },
    "percentiles1": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles2": {
        "total": "87",
        "ok": "-",
        "ko": "86"
    },
    "percentiles3": {
        "total": "115",
        "ok": "-",
        "ko": "116"
    },
    "percentiles4": {
        "total": "146",
        "ok": "-",
        "ko": "146"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "243.902",
        "ok": "-",
        "ko": "243.902"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
