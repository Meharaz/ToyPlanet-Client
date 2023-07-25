import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = ` Toy Planet - ${title} `;
    }, [title])
};

export default useTitle;