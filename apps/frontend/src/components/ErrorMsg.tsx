
type Props ={
  error:string
}

const ErrorMsg = (props:Props) => {
  return (
    <div className="rounded-2xl p-3 mb-6 bg-[#1f222b] dark:bg-[#222e53] text-white text-center">
      <p>{props.error}</p>
    </div>
  );
};

export default ErrorMsg