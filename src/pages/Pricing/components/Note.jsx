// const Note = () => {
//   return (
//     <div className="bg-[#D4FFD0] rounded-xl p-4 md:p-6 text-center w-full max-w-[330px] h-fit shadow-sm">
//       <h2 className="text-[#FF6126] font-semibold text-base mb-1">Note</h2>
//       <p className="text-gray-700 text-xs md:text-base leading-relaxed">
//         Fees are paid by ticket buyers on paid tickets, unless you choose to
//         cover them. Event organizers receive full ticket price minus any covered
//         fees.
//       </p>
//     </div>
//   );
// };

// export default Note;


const Note = () => {
  return (
    <div className="bg-[#D4FFD0] rounded-xl p-4 md:p-6 lg:p-8 text-center w-full max-w-[330px] md:max-w-2xl lg:max-w-3xl h-fit shadow-sm">
      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">
        <span className="font-semibold text-sm md:text-base lg:text-lg">Note:</span>{" "}
        Fees are paid by ticket buyers on paid tickets, unless you choose to
        cover them. Event organizers receive full ticket price minus any covered
        fees.
      </p>
    </div>
  );
};

export default Note;