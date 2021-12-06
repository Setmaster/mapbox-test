export default function AddBranch() {
    return (
        <form>
            <div>
                <div>
                    <label >New Branch Name</label>
                    <input type="text" id="bName" name="newBranchname" placeholder="New Branch.."/>
                </div>
                <div>
                    <label >Promotional Offer</label>
                    <input type="text" id="oName" name="newOffer" placeholder="New promotional offer.."/>
                </div>

                <div>
                    <label >Image URL</label>
                    <input type="text" id="img-url" name="image-url" placeholder="Add Image URL.."/>
                </div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}