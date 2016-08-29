// > mongo 127.0.0.1/SigmaDB SeedCompany.js
//
// Status:
//      0 : Disabled
//      1 : Active
//      2 : Inactive
//      3 : Deleted
//

db.Company.insert({
    "_id" :         ObjectId("51e0373c6f35bd826f47e9a3"),
    ShortName:      'Positiva',
    LongName:       'Positiva compañía de seguros',
    OwnerClient:    "51e0373c6f35bd826f47e9a1",
    CompanyStatus:  1
})