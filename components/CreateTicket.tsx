const CreateTicket = () => {
  return (
    <div>
      <form className="">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Customer Email</span>
          </div>
          <input
            type="email"
            placeholder="Type email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Priority Status</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Select Status
            </option>
            <option>Low Priority</option>
            <option>Medium Priority</option>
            <option>High Priority</option>
          </select>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Ticket Body</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-64 mb-8"
            placeholder="Type ticket issue here..."
          ></textarea>
        </label>
        <div>
          <button type="submit" className="btn w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;
