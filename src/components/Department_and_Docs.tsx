import { useEffect, useState } from "react";
import YourdocsCard3 from "../components/yourdocs_card3";
import axios from "axios";

const Department_and_Docs = () => {
  interface Department {
    _id: string;
    department_name: string;
    documents_issued: string[];
  }

  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    fetchDepartmentData("Kerala");
  }, []);

const fetchDepartmentData = async (searchKey: string | number | boolean) => {
    try {
        const response = await axios.get(
            `http://localhost:3000/api/documents/get_department`,
            { params: { searchkey: searchKey } }
        );
        setDepartments(response.data.departmentData);
    } catch (error) {
        console.error("Error fetching department data:", error);
    }
};

  return (
    <div>
      {departments.map((department) => (
        <div key={department._id} className="mt-8">
          {/* Department Name */}
          <div className="flex justify-between">
            <div className="text-[16px] font-poppins font-semibold">{department.department_name}</div>
            <div className="flex gap-x-0 mr-5">
              <div className="text-sm font-poppins font-semibold mr-2">View all</div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          {/* Render Documents as Cards */}
          <div className="flex flex-wrap mt-3 gap-4">
            {department.documents_issued.map((doc, index) => (
              <YourdocsCard3 key={`${department._id}-${index}`} title={doc} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Department_and_Docs;
