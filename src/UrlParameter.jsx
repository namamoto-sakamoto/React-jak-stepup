import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    const { seach } = useLocation();
    const query = new URLSearchParams(seach);
    
    return (
        <div>
            <h1>UrlParameterページです</h1>
            <p>パラメーターは {id} です</p>
            <p>クエリパラメーターは {query.get("name")} です</p>
        </div>
    );
};