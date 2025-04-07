export const ImportantDocuments = [
    { dep_code: "CG-CG4", doc_code: 'CG-CG4-001', dep_name: 'Aadhaar Card', state: "Central Government", title: "Aadhaar Card"},
    { dep_code: "CG-CG3", doc_code: 'CG-CG3-001', dep_name: 'Voter ID' , state: "Central Government", title: "Voter ID"},
    { dep_code: "CG-CG2", doc_code: 'CG-CG2-001', dep_name: 'PAN Card' , state: "Central Government", title: "PAN Card"},
    { dep_code: "CG-CG5", doc_code: 'CG-CG5-001', dep_name: 'Caste Certificate', state: "Central Government", title: "Caste Certificate"},
    { dep_code: "CG-CG1", doc_code: 'CG-CG1-001', dep_name: 'Passport', state: "Central Government", title: "Passport"},
    { dep_code: "CG-CG5", doc_code: 'CG-CG5-003', dep_name: 'Disability Certificate', state: "Central Government", title: "Disability Certificate"},
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
    ['KE-D10', 'Agriculture Department']
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
    ["KE-D10-003", "Soil Health Card"]
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
