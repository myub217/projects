const JoinButtons: React.FC = () => {
  return (
    <section className="py-10 text-center bg-base-100">
      <div className="join flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
        <button
          className="btn btn-primary join-item w-full sm:w-auto"
          aria-label="สมัครเลย"
          type="button"
        >
          สมัครเลย
        </button>
        <button
          className="btn btn-secondary join-item w-full sm:w-auto"
          aria-label="ติดต่อเรา"
          type="button"
        >
          ติดต่อเรา
        </button>
        <button
          className="btn btn-accent join-item w-full sm:w-auto"
          aria-label="ดูเพิ่มเติม"
          type="button"
        >
          ดูเพิ่มเติม
        </button>
      </div>
    </section>
  );
};

export default JoinButtons;