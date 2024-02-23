import AdminHeader from "./components/AdminHeader";

import "../assets/css/AllTeacher.css";
import Profile from "../components/Profile";
import { useState } from "react";
import Modal from "../components/Modal";
import CreateUser from "../components/CreateUser";
import { deleteTeacher, getAllTeachers } from "../service/userService";
import { useQuery } from "@tanstack/react-query";
import StudentCard from "../components/StudentCard";
import TeacherCard from "../components/TeacherCard";
import Loading from "../components/Loading";

const AllTeacher = () => {
  const [searchValue, setSearchValue] = useState("");

  const [createModal, setCreateModal] = useState(false);

  const {
    data: teachers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => getAllTeachers(),
  });

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = async (id) => {
    await deleteTeacher(id);
    refetch();
  };

  return (
    <div className="admin_teacher">
      <AdminHeader
        btnText="Add Teacher"
        type="teachers"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target?.value)}
        onClick={() => setCreateModal(true)}
      />

      <div className="teachers_grid">
        {teachers
          ?.filter((val) => {
            let searchVal = searchValue?.toLowerCase();
            if (
              val.firstName.toLowerCase().startsWith(searchVal) ||
              val.middleName.toLowerCase().startsWith(searchVal) ||
              val.gender.toLowerCase().startsWith(searchVal) ||
              val.teacherStatus.toLowerCase().startsWith(searchVal) ||
              val.lastName.toLowerCase().startsWith(searchVal)
            ) {
              return val;
            }
          })
          ?.map((teacher, index) => (
            <TeacherCard
              key={index}
              teacher={teacher}
              onClick={() => handleDelete(teacher?._id)}
            />
          ))}
      </div>
      {!teachers && (
        <div className="center">
          <h3>No Assigned Course</h3>
        </div>
      )}

      <Modal
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        hasCloseBtn={true}
      >
        <CreateUser role="teacher" setIsCreating={setCreateModal} />
      </Modal>
    </div>
  );
};

export default AllTeacher;
