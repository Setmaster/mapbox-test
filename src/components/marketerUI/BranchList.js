import "./branchList.css"

export default function BranchList(props) {

    return (<ul className="branch-list">
            <li>
                <div className="add-branch">
                    <button
                        type="submit"
                        onClick={props.onAdd}
                    >Add Branch
                    </button>
                </div>
            </li>
            {props.items.map((branch) => {

                return <li className="branch-list-item">
                    <div className="image-box">
                        <img src={branch.image} alt="thumbnail"/>
                    </div>
                    <div className="text-box">
                        <h2> {branch.branchName}</h2>
                    </div>
                </li>
            })}
        </ul>
    )
}