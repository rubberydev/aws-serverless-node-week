'use strict';

module.exports.hello = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify({
                message: 'First exercise',
                input: event,
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.helloJulian = async event => {
    const name = "Julian :)";
    return {
        statusCode: 200,
        headers: {
            "Content-type": "text/html"
        },
        // body: JSON.stringify({
        //         message: `Hello ${name}`,
        //         input: event,
        //     },
        //     null,
        //     2
        // ),
        body: '<html><body>I love Node</body></html>'
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};