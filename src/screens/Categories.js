import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import ScreenHeading from "../components/ScreenHeading";
import style from "./Categories.module.css"
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

const URL = "http://dlivr.herokuapp.com"
const ImgUrl = "https://storage.googleapis.com/dlivr-55a47.appspot.com/"
const Categories = () => {
    const history = useHistory();
    const [progress, setProgress] = useState(0);
    const [categories, setCategories] = useState([])

    const [name, setName] = useState("");
    const [base_value, setBase_value] = useState("");
    const [description, setDecription] = useState("");
    const [image, setImage] = useState(null);
    useEffect(() => {
        setProgress(70)
        axios.get(`${URL}/admin/vehicle-categories`, {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
        })
            .then(res => {
                setProgress(100)
                console.log(res.data)
                setCategories(res.data.data)

            })
            .catch(err => {
                setProgress(100)
                console.log(err.response.data)
            })
    }, [])

    const addCategory = (e) => {
        setProgress(70)
        e.preventDefault();
        if (name === "" || base_value === "" || description === "" || image === "") {
            toast.error("Please fill all details")
        }
        else if (base_value < 1) {
            toast.error("please enter a valid base value for price per km.")
        }
        else {
            var categoryData = new FormData();
            categoryData.append("name", name)
            categoryData.append("base_value", base_value)
            categoryData.append("description", description)
            categoryData.append("vehicle_image", image)
            setProgress(70)
            axios({
                method: 'post',
                url: `${URL}/admin/vehicle-category`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + JSON.parse(localStorage.getItem("token")),
                },
                data: categoryData
            })
                .then(res => {
                    setProgress(100)
                    toast.success("Vehicle Category Added")
                    history.push("/vehicles");
                })
                .catch(err => {
                    setProgress(100)
                    console.log(err.response.data)
                    toast.error("error")
                });
            setProgress(100)
        }
    }
    return (
        <>
            <LoadingBar
                color="#6f2da8"
                height={3}
                loaderSpeed={600}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div>
                <ScreenHeading heading="Vehicle Categories" />
                <div className={style.addDiv}>
                    <input value={name} onChange={e => setName(e.target.value)} className={style.input} placeholder="Category Name" />
                    <input value={base_value} type="number" min="0" onChange={e => setBase_value(e.target.value)} className={style.input} placeholder="Price Per Km" />
                    <textarea value={description} onChange={e => setDecription(e.target.value)} className={style.textarea} placeholder="Description" />
                    <div className={style.selectImg}>
                        <p className={style.inputHeading}>Select Vehicle Category Image</p>
                        <input onChange={e => setImage(e.target.files[0])} type="file" />
                    </div>
                    <button onClick={addCategory} className={style.addBtn}>Add Category</button>
                </div>
                <div className={style.vehicleCards}>
                    {categories.length > 0 ?
                        categories.map((data, index) => {
                            return (
                                <Link to={`/vehicles/categories/${data._id}`} key={index} className={style.card}>
                                    <div className={style.cardImg}>
                                        <img src={`${ImgUrl}${data.image}`} alt="..." />
                                    </div>
                                    <div className={style.cardData}>
                                        <p className={style.cardTitle}>{data.name}</p>
                                        <p className={style.subTitle}>Per Km Price {data.base_value}</p>
                                    </div>
                                </Link>
                            )
                        })

                        : <p className={style.inputHeading}>No Vehicle Category added yet</p>}

                </div>
            </div>
        </>
    )
}

export default Categories;