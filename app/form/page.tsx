import 'styled-components';
import Form from "@/components/form";
import "../../components/sytlosForm/form.css"

function ViewForm(){
    return(
        <main className="PageForm" >
            <h1 className="tituloPageForm" >New Product</h1>
            <Form />
        </main>
    )
}
export default ViewForm;

