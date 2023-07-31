import { useEffect, useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./Form.css";

function PostJobPage() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    phone: "",
    website: "",
    requirements: "",
    salary: "",
    vacancy: "",
    category: [],
    posted_date: "",
    closing_date: "",
    description: "",
    images: null,
  });
  const [fileName, setFileName] = useState("No selected file");

  const categories = [
    { name: "Cybersecurity", value: "Cybersecurity" },
    { name: "Frontend", value: "Frontend" },
    { name: "Backend", value: "Backend" },
    { name: "Web Developer", value: "Web Developer" },
    { name: "App Developer", value: "App Developer" },
    { name: "Management", value: "Management" },
    { name: "Graphics Designer", value: "Graphics Designer" },
    { name: "Software Developer", value: "Software Developer" },
    { name: "Video Editor", value: "Video Editor" },
    { name: "HR", value: "HR" },
  ];
  useEffect(() => {
    console.log(job);
  }, [job]);

  const handleCategoryChange = (event) => {
    const cat = event.target.value;
    const tempCategories = [...job.category];

    if (tempCategories.includes(cat)) {
      const index = tempCategories.indexOf(cat);
      tempCategories.splice(index, 1);
    } else {
      tempCategories.push(cat);
    }
    setJob({ ...job, category: tempCategories });
  };

  const validateCheckbox = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    return Array.from(checkboxes).some((checkbox) => checkbox.checked);
  };

  const handleChange = (event) => {
    setJob({ ...job, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello world");
    const checkboxValidation = validateCheckbox();
    if (checkboxValidation) {
      console.log("has category");
    } else {
      console.log("no category");
    }
  };

  const renderCategories = categories.map((category, indx) => {
    return (
      <div className="category-field" key={indx}>
        <input
          onChange={handleCategoryChange}
          type="checkbox"
          name={category.name}
          value={category.value}
        />
        <label htmlFor={category.name}>{category.name}</label>
      </div>
    );
  });

  return (
    <div className="page-wrapper">
      <h2 className="form-title">Create a Job</h2>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="input-section">
          <div className="form-field">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="company"
              value={job.company}
              required
              placeholder="Name *"
            />
          </div>
          <div className="form-field">
            <label htmlFor="website">Company Website</label>
            <input
              type="text"
              onChange={handleChange}
              value={job.website}
              name="website"
              required
              placeholder="Website Link *"
            />
          </div>
        </div>
        <div className="input-section">
          <div className="form-field">
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              onChange={handleChange}
              value={job.title}
              name="title"
              required
              placeholder="Title *"
            />
          </div>
        </div>
        <div className="input-section">
          <div className="form-field">
            <label htmlFor="location">Job Location</label>
            <input
              type="text"
              onChange={handleChange}
              value={job.location}
              name="location"
              required
              placeholder="Location *"
            />
          </div>
          <div className="form-field">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              onChange={handleChange}
              value={job.salary}
              name="salary"
              required
              placeholder="Salary *"
            />
          </div>
        </div>
        <div className="input-section">
          <div className="form-field">
            <label htmlFor="phone">Contact</label>
            <input
              type="number"
              onChange={handleChange}
              value={job.phone}
              name="phone"
              required
              placeholder="Contact *"
            />
          </div>
          <div className="form-field">
            <label htmlFor="vacancy">Vacancy No.</label>
            <input
              type="number"
              onChange={handleChange}
              value={job.vacancy}
              name="vacancy"
              required
              placeholder="Vacancy No. *"
            />
          </div>
        </div>
        <div className="input-section">
          <div className="form-field">
            <label htmlFor="posted_date">Application Start</label>
            <input
              type="date"
              onChange={handleChange}
              value={job.posted_date}
              name="posted_date"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="closing_date">Application Deadline</label>
            <input
              type="date"
              onChange={handleChange}
              value={job.closing_date}
              name="closing_date"
              required
            />
          </div>
        </div>
        <div className="input-section">
          <div className="form-field">
            <label htmlFor="requirements">Job Requirement</label>
            <textarea
              value={job.requirements}
              onChange={handleChange}
              required
              name="requirements"
              placeholder="Job Requirement"
            />
          </div>
          <div className="form-field">
            <label htmlFor="description">Job Description</label>
            <textarea
              value={job.description}
              onChange={handleChange}
              required
              name="description"
              placeholder="Job Description"
            />
          </div>
        </div>
        <div className="input-section">
          <div id="category-heading" className="input-category-wrapper">
            <span>Job Category</span>
            <p>#Select at least one category!</p>
            <div className="input-category-container">
              <div className="category-input-section">
                {renderCategories.slice(0, 5)}
              </div>
              <div className="category-input-section">
                {renderCategories.slice(5)}
              </div>
            </div>
          </div>
          <div className="form-field">
            <label>Upload Image</label>
            <div
              onClick={() => {
                document.querySelector(".image-input").click();
              }}
              className="image-input-wrapper"
            >
              <input
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setJob({ ...job, images: URL.createObjectURL(files[0]) });
                  }
                }}
                className="image-input"
                name="images"
                type="file"
                accept="image/*"
                hidden
              />
              {job.images ? (
                <img src={job.images} />
              ) : (
                <>
                  <MdCloudUpload size={60} color="#e3e3e3" />
                  <p>Browse Files to upload</p>
                </>
              )}
            </div>
            <div className="image-remove-btn-wrapper">
              <AiFillFileImage color="#338573" />
              <div>
                <span>{fileName}</span>
                <button
                  type="button"
                  onClick={() => {
                    setFileName("No selected file");
                    setJob({ ...job, images: null });
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="form-btn post-btn">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default PostJobPage;
