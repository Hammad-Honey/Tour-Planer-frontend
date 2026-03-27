import { FILTER_GROUPS as filterGroup } from '../../utils/filterGroups'
import { useFormik } from 'formik'



function Filter() {

    const options = () => {
        return Object.keys(filterGroup).map((category) => {
            return (
                < option key={category} value={category} >
                    {category.replace("_", " ").toLowerCase()}
                </option >)
        })

    }

    const buttonsOptions=()=>{
        return 0
    }



    const { interesting_places, amusements, tourist_facilities, accommodation, nature, religion, landmarks } = filterGroup

    const formik = useFormik({
        initialValues: {
            kinds: ""
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })



    return (
        <>
            <form onSubmit={formik.handleSubmit}>

                <select
                    name="kinds"
                    value={formik.values.kinds}
                    onChange={formik.handleChange}
                    className='rounded-full py-1 px-2 border-r-10 border-white bg-white shadow-xl/30'>
                    <option>Select Category</option>
                    {options()}




                </select>

                {
                    formik.values.kinds &&
                    <button onClick={formik.resetForm} className="rounded-full py-1 px-2  bg-white shadow-xl/30">Reset</button>
                }

            </form>

        </>
    )
}
export default Filter