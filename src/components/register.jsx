import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';

const register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role_id, setRoleId] = useState('2');


  const handleSignInClick = () => {
    navigate("/login");
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://personaltaskmanager-s8fw.onrender.com/register', {
        name: name,
        email: email,
        username: username,
        password: password,
        // Assuming role_id is defined somewhere in the component
        role_id: 2,
      });
      console.log(response.data);
    } catch (error) {
      console.log('Registration failed. Please try again!', error);
    }
  };

  return (
    <div className='flex justify-center items-center h-full'>
         <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            size="lg"
            placeholder="name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={name} onChange={(e) => setName(e.target.value)}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={email} onChange={(e) => setEmail(e.target.value)}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Username
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={username} onChange={(e) => setUsername(e.target.value)}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={password} onChange={(e) => setPassword(e.target.value)}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth onClick={handleRegister}>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
    </div>
  );
};

export default register;
