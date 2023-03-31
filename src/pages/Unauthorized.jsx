import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="p-5">
      <h1 className="text-3xl text-red-600 font-bold tracking-tighter">
        Unauthorized
      </h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div>
        <button className="underline font-semibold" onClick={goBack}>
          Go Back
        </button>
      </div>
    </section>
  );
};

export default Unauthorized;
