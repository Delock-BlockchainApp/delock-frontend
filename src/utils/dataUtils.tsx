export const ImportantDocuments = [
    { dep_code: "CG-CG4", doc_code: 'CG-CG4-001', dep_name: 'Aadhaar Card', state: "Central Government", title: "Aadhaar Card"},
    { dep_code: "CG-CG3", doc_code: 'CG-CG3-001', dep_name: 'Voter ID' , state: "Central Government", title: "Voter ID"},
    { dep_code: "CG-CG2", doc_code: 'CG-CG2-001', dep_name: 'PAN Card' , state: "Central Government", title: "PAN Card"},
    { dep_code: "CG-CG5", doc_code: 'CG-CG5-001', dep_name: 'Caste Certificate', state: "Central Government", title: "Caste Certificate"},
    { dep_code: "CG-CG1", doc_code: 'CG-CG1-001', dep_name: 'Passport', state: "Central Government", title: "Passport"},
    { dep_code: "CG-CG5", doc_code: 'CG-CG5-003', dep_name: 'Disability Certificate', state: "Central Government", title: "Disability Certificate"},
    { 
        dep_code: "CG-CG10", 
        doc_code: "CG-CG10-001", 
        dep_name: "Ayushman Bharat Card", 
        state: "Central Government", 
        title: "Ayushman Bharat Card", 
        description: "The Ayushman Bharat Card provides health insurance coverage under the Pradhan Mantri Jan Arogya Yojana (PM-JAY), allowing eligible families to receive free medical treatment at government and empaneled private hospitals.",
    },
    {
        dep_code: "KE-D1",
        doc_code: "KE-D1-001",
        dep_name: "Driving Licence",
        state: "State Government",
        title: "Driving Licence",
        description: "A Driving Licence is an official document issued by the transport authority that permits an individual to operate a motor vehicle on public roads. It serves as proof of competence in driving, ensuring that the holder has undergone the necessary training, passed the required tests, and meets all legal requirements for road safety. The licence includes details such as the individual's name, photograph, date of birth, address, and the vehicle categories they are allowed to drive. It must be renewed periodically and can be suspended or revoked for traffic violations.",
   
    },
    {
        dep_code: "AN-D1",
        doc_code: "AN-D1-002",
        dep_name: "Vehicle Registration Certificate",
        state: "State Government",
        title: "Vehicle Registration Certificate",
        description: "The Vehicle Registration Certificate (RC) is an essential legal document that establishes the ownership and registration details of a motor vehicle. Issued by the Regional Transport Office (RTO), the RC contains crucial information such as the vehicle's registration number, chassis number, engine number, owner\u2019s details, fuel type, and date of registration. It is mandatory for all vehicle owners to carry a valid RC while operating their vehicle, as it serves as proof that the vehicle has been registered under government regulations and is legally allowed on the road.",
 
    }
];

// State Map
export const stateMap = new Map([
    ["KL", "Kerala"],
    ["TN", "Tamil Nadu"],
    ["KA", "Karnataka"],
    ["AP", "Andhra Pradesh"],
    ["MH", "Maharashtra"],
    ["GJ", "Gujarat"],
    ["RJ", "Rajasthan"],
    ["UP", "Uttar Pradesh"],
    ["MP", "Madhya Pradesh"],
    ["WB", "West Bengal"],
    ["BR", "Bihar"],
    ["OR", "Odisha"],
    ["AS", "Assam"],
    ["JH", "Jharkhand"],
    ["UK", "Uttarakhand"],
    ["HP", "Himachal Pradesh"],
    ["PB", "Punjab"],
    ["HR", "Haryana"],
    ["TG", "Telangana"],
    ["CT", "Chhattisgarh"],
    ["GA", "Goa"],
    ["MN", "Manipur"],
    ["ML", "Meghalaya"],
    ["MZ", "Mizoram"],
    ["NL", "Nagaland"],
    ["SK", "Sikkim"],
    ["TR", "Tripura"],
    ["AR", "Arunachal Pradesh"]
]);

// Department Map
export const departmentMap = new Map([
    ['KA-D1', 'Motor Vehicles Department'],
    ['KA-D2', 'Revenue Department'],
    ['KA-D3', 'Education Department'],
    ['KA-D4', 'Health Department'],
    ['KA-D5', 'Police Department'],
    ['KA-D6', 'Labour Department'],
    ['KA-D7', 'Fisheries Department'],
    ['KA-D8', 'Urban Development Department'],
    ['KA-D9', 'Social Welfare Department'],
    ['KA-D10', 'Agriculture Department'],
    ['KE-D1', 'Motor Vehicles Department'],
    ['KE-D2', 'Revenue Department'],
    ['KE-D3', 'Education Department'],
    ['KE-D4', 'Health Department'],
    ['KE-D5', 'Police Department'],
    ['KE-D6', 'Labour Department'],
    ['KE-D7', 'Fisheries Department'],
    ['KE-D8', 'Urban Development Department'],
    ['KE-D9', 'Social Welfare Department'],
    ['KE-D10', 'Agriculture Department'],
    ['CG-CG1', 'Passport Seva Kendra'],
    ['CG-CG2', 'Income Tax Department'],
    ['CG-CG3', 'Election Commission'],
    ['CG-CG4', 'UIDAI'],
    ['CG-CG5', 'Department of Empowerment of Persons with Disabilities'],
    ['CG-CG10', 'Ministry of Health and Family Welfare']
]);

// Document Map
export const documentMap = new Map([
    ["KA-D1-001", "Driving Licence"],
    ["KA-D1-002", "Vehicle Registration Certificate"],
    ["KA-D1-003", "Pollution Under Control Certificate"],

    ["KA-D2-001", "Land Tax Receipt"],
    ["KA-D2-002", "Possession Certificate"],
    ["KA-D2-003", "Encumbrance Certificate"],

    ["KA-D3-001", "SSLC Certificate"],
    ["KA-D3-002", "Higher Secondary Certificate"],
    ["KA-D3-003", "Transfer Certificate"],

    ["KA-D4-001", "Birth Certificate"],
    ["KA-D4-002", "Death Certificate"],
    ["KA-D4-003", "Medical Fitness Certificate"],

    ["KA-D5-001", "Police Clearance Certificate"],
    ["KA-D5-002", "Gun Licence"],
    ["KA-D5-003", "Character Certificate"],

    ["KA-D6-001", "Labour Welfare Fund Registration"],
    ["KA-D6-002", "Shops and Establishment Licence"],
    ["KA-D6-003", "Trade Licence"],

    ["KA-D7-001", "Fisherman Identity Card"],
    ["KA-D7-002", "Fishing Boat Registration"],
    ["KA-D7-003", "Subsidy Approval Certificate"],

    ["KA-D8-001", "Building Permit"],
    ["KA-D8-002", "Property Tax Receipt"],
    ["KA-D8-003", "Completion Certificate"],

    ["KA-D9-001", "BPL Certificate"],
    ["KA-D9-002", "Old Age Pension Approval"],
    ["KA-D9-003", "Disability Certificate"],

    ["KA-D10-001", "Farmer ID Card"],
    ["KA-D10-002", "Crop Insurance Certificate"],
    ["KA-D10-003", "Soil Health Card"],

    ["KE-D1-001", "Driving Licence"],
    ["KE-D1-002", "Vehicle Registration Certificate"],
    ["KE-D1-003", "Pollution Under Control Certificate"],

    ["KE-D2-001", "Land Tax Receipt"],
    ["KE-D2-002", "Possession Certificate"],
    ["KE-D2-003", "Encumbrance Certificate"],

    ["KE-D3-001", "SSLC Certificate"],
    ["KE-D3-002", "Higher Secondary Certificate"],
    ["KE-D3-003", "Transfer Certificate"],

    ["KE-D4-001", "Birth Certificate"],
    ["KE-D4-002", "Death Certificate"],
    ["KE-D4-003", "Medical Fitness Certificate"],

    ["KE-D5-001", "Police Clearance Certificate"],
    ["KE-D5-002", "Gun Licence"],
    ["KE-D5-003", "Character Certificate"],

    ["KE-D6-001", "Labour Welfare Fund Registration"],
    ["KE-D6-002", "Shops and Establishment Licence"],
    ["KE-D6-003", "Trade Licence"],

    ["KE-D7-001", "Fisherman Identity Card"],
    ["KE-D7-002", "Fishing Boat Registration"],
    ["KE-D7-003", "Subsidy Approval Certificate"],

    ["KE-D8-001", "Building Permit"],
    ["KE-D8-002", "Property Tax Receipt"],
    ["KE-D8-003", "Completion Certificate"],

    ["KE-D9-001", "BPL Certificate"],
    ["KE-D9-002", "Old Age Pension Approval"],
    ["KE-D9-003", "Disability Certificate"],

    ["KE-D10-001", "Farmer ID Card"],
    ["KE-D10-002", "Crop Insurance Certificate"],
    ["KE-D10-003", "Soil Health Card"],
    ["CG-CG3-002", "Election Commission Certificate"],
    ["CG-CG3-001", "Voter ID"],

]);

// Functions to get names
export const getDepartmentName = (deptId: string) => {
    return departmentMap.get(deptId);
};

export const getDocumentName = (docId: string) => {
    return documentMap.get(docId);
};

export const getStateName = (stateCode: string) => {
    return stateMap.get(stateCode);
};
