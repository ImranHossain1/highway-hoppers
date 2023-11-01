"use client";
import StepperForm from "@/components/ui/SteooerForm/StepperForm";
import StudentBasicInfo from "@/components/ui/StudentForms/StudentBasicInfo";
import GuardianInfo from "@/components/ui/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/ui/StudentForms/LocalGuardianInfo";
import StudentInfo from "@/components/ui/StudentForms/StudentInfo";
import React from "react";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];
  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>create student</h1>
      <StepperForm
        steps={steps}
        submitHandler={(value) => handleStudentSubmit(value)}
      ></StepperForm>
    </div>
  );
};

export default CreateStudentPage;
