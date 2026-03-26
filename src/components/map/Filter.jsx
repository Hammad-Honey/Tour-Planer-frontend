import { FILTER_GROUPS as filterGroup } from '../../utils/filterGroups'
import { useFormik } from 'formik'



function Filter() {
    const array = Object.entries(filterGroup)
    const createOptions = () => {
        return array.map((type, key) => {
            return (
                <>
                    <select
                        name='kinds'
                        value={formik.values.kinds}
                        onChange={formik.handleChange}


                    >

                    </select>

                </>
            )
        })
    }
    console.log(array);
    console.log(array[0]);

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
                    onBlur={formik.handleBlur}
                >
                    <option>select an option</option>
                    {interesting_places.map((place, index) => (
                        <option key={index}>{place}</option>
                    ))}
                </select>

                {formik.values.interesting_places &&
                    <button onClick={formik.resetForm} className="rounded-full py-1 px-2  bg-white shadow-xl/30">Reset</button>
                }
                {formik.touched.country && formik.errors.country && (
                    <p>{formik.errors.country}</p>
                )}
            </form>

        </>
    )
}
export default Filter