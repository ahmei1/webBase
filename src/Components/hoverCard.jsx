import { ChevronRight } from "lucide-react";


function StripeCard(props) {
  return (
    //img 1
    <div className="w-[90%] h-480px group mx-auto bg-white border overflow-hidden rounded-md text-black p-2">
      <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden">
        <div
          style={{
            background:
              `linear-gradient(120.9deg,${props.bg}  50%, rgba(0, 0, 0, 0) 68.91%)`,
          }}
          className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300"
        ></div>

        <img
          src={props.img}
          alt="shoes"
          className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82] rounded-lg object-cover transition-all duration-300"
        />
      </figure>

      <article className="p-4 space-y-2">

        <h1 className="text-xl font-semibold capitalize">
          {props.text1}
        </h1>

        <p className="text-base leading-[120%]">
          {props.text2}
        </p>

        <a
          href={props.link}
          target="blank"
          className="text-blue-600 font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1 transition-all duration-300"
        >
          Visit Link
          <ChevronRight />
        </a>
      </article>
    </div>
  );
}

export default StripeCard;
