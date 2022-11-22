export default ({ text }) => {
    return(
        <a href="#" className="py-8 relative group">
            <span className="group-hover:text-red-600">{text}</span>
            <span className="absolute bottom-0 left-0 block h-1 w-full scale-x-0 transition-all duration-700 group-hover:scale-100 group-hover:bg-red-600"></span>
        </a>
    );
};