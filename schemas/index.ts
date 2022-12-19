export const schemaTypes = [
    {
        name: "user",
        title: "user",
        type: "document",
        fields: [
            {
                name: "username",
                title: "Username",
                type: "string",
            },
            {
                name: "AadharNumber",
                title: "Aadhar Number",
                type: "string",
            },
            {
                name: "Email",
                title: "Email",
                type: "string",
            },
            {
                name: "MobileNumber",
                title: "Mobile Number",
                type: "string",
            },
            {
                name: "Address",
                title: "Address",
                type: "string",
            },
            {
                name: "Password",
                title: "Password",
                type: "string",
            },
        ],
    },
    {
        name: "complaint",
        title: "complaint",
        type: "document",
        fields: [
            {
                name: "typeofcomplain",
                title: "typeofcomplain",
                type: "string",
            },
            {
                name: "fulladdress",
                title: "Full Address",
                type: "string",
            },
            {
                name: "MobileNumber",
                title: "Mobile Number",
                type: "string",
            },
            {
                name: "AadharNumber",
                title: "AadharNumber",
                type: "string",
            },
            {
                name: "DetailsAboutComplaint",
                title: "DetailsAboutComplaint",
                type: "string",
            },
            {
                name: 'user',
                type: 'object',
                fields: [
                    {
                        title: 'user',
                        name: 'user',
                        type: 'reference',
                        to: [{ type: 'user' }]
                    }
                ]
            }
        ],
    },
    {
        name: "request",
        title: "request",
        type: "document",
        fields: [
            {
                name: "typeofrequest",
                title: "typeofrequest",
                type: "string",
            },
            {
                name: "fulladdress",
                title: "Full Address",
                type: "string",
            },
            {
                name: "MobileNumber",
                title: "Mobile Number",
                type: "string",
            },
            {
                name: "AadharNumber",
                title: "AadharNumber",
                type: "string",
            },
            {
                name: "DetailsAboutComplaint",
                title: "DetailsAboutComplaint",
                type: "string",
            },
            {
                name: 'user',
                type: 'object',
                fields: [
                    {
                        title: 'user',
                        name: 'user',
                        type: 'reference',
                        to: [{ type: 'user' }]
                    }
                ]
            },
        ],
    },
]
