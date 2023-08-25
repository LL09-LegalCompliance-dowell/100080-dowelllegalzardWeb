import React from 'react';

import { Formik, Form } from 'formik';
import CustomInput from '../../../components/CustomInput';
const SlpFisrtScreen = () => {
return(
  <div>
    <Formik
      initialValues={{
        name: '',
        postalAddress:'',
        registerationNumber:''
      }}
      onSubmit={async (values) => {
        console.log(values)
        // await new Promise((r) => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className='my-5'>
       <CustomInput id="name" placeholder="Eg. John Smith Doe" title="Full Name of the Individual:"/>
       <CustomInput id="postalAddress" placeholder="Eg. 202002" title="Postal Address:"/>
       <CustomInput id="registerationNumber" placeholder="" title="What is the registration number of the party?"/>
       <button type='submit'>testConole</button>
      </Form>
    </Formik>
  </div>
)
}
export default SlpFisrtScreen