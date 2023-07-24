import { useNavigate } from "react-router-dom";
import Container from "../../../Container/Container";
import { useForm } from "react-hook-form";

const Admission = () => {
  const nevigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Admission completed Successfully");
          nevigate("/mycollege");
          reset();
        }
      });
  };
  console.log(errors);

  return (
    <Container>
      <div className="flex border  bg-gradient-to-tr from-purple-300 to-blue-400">
        <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 ">
          <img
            src="https://i.pinimg.com/564x/ec/8c/10/ec8c10315f150bffe0663168ee941c27.jpg"
            alt=""
            className="w-full  object-cover"
          />
        </div>

        <div
          className=" w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2  px-6 
        flex items-center justify-center"
        >
          <div className="w-full">
            <h1 className="text-xl md:text-2xl font-bold leading-tight ">
              Student Details
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* 1 */}
              <div>
                <input
                  type="text"
                  {...register("candidateName", { required: true })}
                  placeholder="Enter Candidate Name"
                  className="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.candidateName && <span>This field is required</span>}
              </div>
              {/* 2 */}
              <div className="mt-2">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Candidate Email"
                  className="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              {/* 3 */}
              <div className="mt-4">
                <input
                  type="text"
                  {...register("subject", { required: true })}
                  placeholder="Enter Subject"
                  className="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.subject && <span>This field is required</span>}
              </div>
              {/* 4 */}
              <div className="mt-4">
                <input
                  type="tel"
                  {...register("phoneNumber", { required: true })}
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.phoneNumber && <span>This field is required</span>}
              </div>
              {/* 5 */}
              <div className="mt-4">
                <input
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="Enter Address"
                  className="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.address && <span>This field is required</span>}
              </div>
              {/* 6 */}
              <div className="mt-4">
                <input
                  type="date"
                  {...register("dob", { required: true })}
                  className="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.dob && <span>This field is required</span>}
              </div>
              {/* 7 */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Enter Image URL"
                  {...register("image")}
                  className="w-full px-4 py-3 rounded-lg bg-white  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.image && <span>This field is required</span>}
              </div>

              <button type="submit" className="w-full btn mt-4 btn-outline">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Admission;
