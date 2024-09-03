import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHackathons } from "../context/HackathonContext";
import { useNavigate, useParams } from "react-router-dom";

const HackathonCard = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [previewSrc, setPreviewSrc] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addHackathon, updateHackathon, hackathons } = useHackathons();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const hackathonToEdit = isEditMode
    ? hackathons.find((h) => h.id === Number(id))
    : null;

  useEffect(() => {
    if (isEditMode && hackathonToEdit) {
      reset(hackathonToEdit);
      setImageSrc(hackathonToEdit.image);
      setPreviewSrc(hackathonToEdit.image);
    }
  }, [isEditMode, hackathonToEdit, reset]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    if (isEditMode) {
      updateHackathon({ ...data, id: Number(id) });
    } else {
      addHackathon({ ...data, image: imageSrc });
      console.log(data);
    }
    navigate("/");
  };

  return (
    <div className="hackathon-card-container">
      <h2 className="hack-h2">{isEditMode ? "Edit" : ""} Challenge Details</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-[89px] py-6 space-y-6"
      >
        {/* Challenge Name */}
        <div className="input-divs space-y-4">
          <label className="input-labels">Challenge Name</label>
          <input
            type="text"
            {...register("name", { required: "Challenge Name is required" })}
            className="input-fields"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Start Date */}
        <div className="input-divs space-y-4">
          <label className="input-labels">Start Date</label>
          <input
            type="date"
            placeholder="Start"
            {...register("startDate", { required: "Start Date is required" })}
            className="input-fields"
          />
          {errors.startDate && (
            <p className="text-red-600 text-sm">{errors.startDate.message}</p>
          )}
        </div>

        {/* End Date */}
        <div className="input-divs space-y-4">
          <label className="input-labels">End Date</label>
          <input
            type="date"
            {...register("endDate", { required: "End Date is required" })}
            className="input-fields"
          />
          {errors.endDate && (
            <p className="text-red-600 text-sm">{errors.endDate.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="input-divs space-y-4">
          <label className="input-labels">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="input-textarea input-fields"
          />
          {errors.description && (
            <p className="text-red-600 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="input-divs space-y-4">
          <label className="input-labels">Image</label>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="input-file"
            />
          </div>
          {errors.image && (
            <p className="text-red-600 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Level Type */}
        <div className="input-divs space-y-4">
          <label className="input-labels">Level Type</label>
          <select
            {...register("level", { required: "Level Type is required" })}
            className="input-fields input-select"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.level && (
            <p className="text-red-600 text-sm">{errors.level.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="submit-btn">
            {isEditMode ? "Update Challenge" : "Create Challenge"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HackathonCard;
