import React from 'react'
import {Col, Form, Row} from 'antd'
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("Received values of form:", values);
    }
  return (
    <div className='m-5'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl'>Sri's Wallet-REGISTER</h1>
            <h1 className='text-sm underline'onClick={()=>navigate('/login ')}>
                Already a member , login
            </h1>
            </div>
        <hr/>
        <Form layout='vertical' onFinish={onFinish}>
            <Row gutter={16}>
                <Col span={6}>
                <Form.Item label="Firstname" name="firstName">
                    <input type='text'/>
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item label="Lastname" name="lastName">
                    <input type='text'/>
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item label="Email" name="email">
                    <input type='text'/>
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item label="mobile" name="mobileNumber">
                    <input type='text'/>
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item label="Identification Type" name="identificationType">
                    <select>
                        <option value="NATIONAL ID">National ID</option>
                        <option value="PASSPORT">passport</option>
                        <option value="DRIVING LICENSE">Driving License</option>
                        <option value="SOCIAL CARD">Social Security Card (SSN)</option>
                    </select>
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item label="Identification Number" name="identificationNumber">
                    <input type='text'/>
                    
                </Form.Item>
                </Col>
                <Col span={24}>
                <Form.Item label="Address" name="address">
                    <textarea type="text" />
                    
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item label="Password" name="password" >
                    <input type="password"/>
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item label="Confirm password" name="confirmPassword" >
                    <input type="password"/>
                </Form.Item>
                </Col>
            </Row>
            <div className='flex justify-end'>
                <button className='primary-contained-btn' type='submit'>Register</button>
            </div>
        </Form>
    </div>
  )
}

export default Register