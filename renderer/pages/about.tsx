import {
  Box,
  Flex,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Text,
  Input,
  Heading,
  Editable,
  useColorModeValue,
  FormControl 
} from "@chakra-ui/react";
//import Link from 'next/link';
import React, { useState, useEffect } from "react";
//import theme from "./theme";
//import prisma from "../pages/lib/prisma";
//import type { GetServerSideProps } from "next";
//import { Shixyakenn} from '@prisma/client';
//import { useCallback } from "react";
//import { useRouter } from "next/router";
//import { useForm ,useWatch, Control,useFieldArray } from "react-hook-form";
//import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import type { NextPage } from 'next'
//import Head from 'next/head'
//import { gql, useQuery,useMutation } from '@apollo/client';
//import { Shixyakenn } from "@prisma/client";
//import internal from "stream";
//import { CreateItemQuery } from "../graphql/types";
//import { queryComplexityPlugin } from "nexus";

interface Cardatabase{
  id :number;
  user: string;
  address :string;
  vehiclenumber : string;
  firstyear : string;
  carname :string;
  modelnumber : string;
  classnumber: string;
  model : string;
  motormodel : string;
  chassisnumber :string;
  nextdate :string;
}
/**
 * CUD 
*/
/*
const AllTasksQuery = gql`
  query {
    shixyakenn {
      id 
      user
      address 
      vehiclenumber 
      firstyear 
      carname 
      modelnumber 
      classnumber
      model
      motormodel 
      chassisnumber
      nextdate 
    }
  }
`
console.log(AllTasksQuery);
const UpdateTaskMutation = gql`
  mutation UpdateTask($id: Int!,$user: String!,$address :String!, $vehiclenumber:String!, $firstyear:String!,$carname :String!,$modelnumber :String!,$classnumber:String!,$model:String!,$motormodel :String!,$chassisnumber:String!,$nextdate:String!) {
    updateTask(user:$user,address:$address,vehiclenumber: $vehiclenumber,firstyear:$firstyear,carname:$carname,modelnumber:$modelnumber, classnumber:$classnumber,model:$model,motormodel:$motormodel, chassisnumber:$chassisnumber,nextdate:$nextdate) {
    user
    address 
    vehiclenumber 
    firstyear 
    carname 
    modelnumber 
    classnumber
    model
    motormodel 
    chassisnumber
    nextdate 
    }
  }
`
console.log(UpdateTaskMutation);

const crateItemMutation = gql`
  mutation CreateItem($id: Int!,$user: String!,$address :String!, $vehiclenumber:String!, $firstyear:String!,$carname :String!,$modelnumber :String!,$classnumber:String!,$model:String!,$motormodel :String!,$chassisnumber:String!,$nextdate:String!) {
    createItem(id:$id,user:$user,address:$address,vehiclenumber:$vehiclenumber,firstyear:$firstyear,carname:$carname,modelnumber:$modelnumber, classnumber:$classnumber,model:$model,motormodel:$motormodel, chassisnumber:$chassisnumber,nextdate:$nextdate) {
    id
    user
    address 
    vehiclenumber 
    firstyear 
    carname 
    modelnumber 
    classnumber
    model
    motormodel 
    chassisnumber
    nextdate 
    }
  }
`
console.log(crateItemMutation);
const AboutPage:NextPage = ()  => { 

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }

  //データベース表示
  const { data,loading, error } = useQuery(AllTasksQuery);
  //データベース更新
  const [updateTask, mutation] = useMutation(UpdateTaskMutation, {
    refetchQueries: [AllTasksQuery],
  });
  const [createPlaylist] = useMutation(crateItemMutation,{
    refetchQueries: [AllTasksQuery],
  });
  const [newPlaylist, setNewPlaylist] = useState("");
  const handleCheckboxClick = (shixyakenn: Shixyakenn) => {
    updateTask({
      variables: {
        id: shixyakenn.id,
        user: shixyakenn.user,
        address:shixyakenn.address,
        vehiclenumber:shixyakenn.vehiclenumber,
        firstyear:shixyakenn.firstyear,
        carname :shixyakenn.carname,
        modelnumber:shixyakenn.modelnumber, 
        classnumber:shixyakenn.classnumber,
        model:shixyakenn.model,
        motormodel:shixyakenn.motormodel,
        chassisnumber:shixyakenn.chassisnumber,
        nextdate:shixyakenn.nextdate 
      },
    })
  }
  //const tasks = [...data.shixyakenn].sort((a: Shixyakenn, b: Shixyakenn) => b.id - a.id)
  //const [createTask, { error }] = useMutation( AllUpdate)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  const bgGradient = useColorModeValue("linear(to-l, blue.400, #7928CA,#FF0080)", "linear(to-r, blue.400, #7928CA,#FF0080)")
  return(
    <>
    
    <div>
    <div>
    <FormControl id="newplaylist">
      <Table variant="simple" colorScheme="gray" size="sm" bgColor="gray.600">
    
      <Thead>
        <Tr>
          <Th bgColor="pink.600"color="white" textAlign="center">
          名前
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          住所
          </Th>
        <Th bgColor="pink.600"color="white" textAlign="center">
        車両番号
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          初年度
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          車　　名
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          型式指定番号
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          類別区分番号
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          型式
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          原動機型式
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          車台番号
          </Th>
          <Th bgColor="pink.600"color="white" textAlign="center">
          次回車検日
          </Th>
        </Tr>
        </Thead>

        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input  placeholder="名前" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="住所" variant='flushed'  bgColor="gray.600"  type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="車両番号" variant='flushed' bgColor="gray.600"  type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="初年度" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="車　　名" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="型式指定番号" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="類別区分番号" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="型式" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="原動機型式" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="車台番号" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="次回車検日" variant='flushed'  bgColor="gray.600" type="text" onChange={(e) => setNewPlaylist(e.target.value)}/>
        </Td>
        </Table>
        <Button
          mt={4}
          onClick={() =>
          createPlaylist({
          variables: { 
            id: newPlaylist,
            user : newPlaylist,
            address : newPlaylist,
            vehiclenumber :newPlaylist,
            firstyear :newPlaylist,
            carname : newPlaylist,
            modelnumber : newPlaylist,
            classnumber : newPlaylist,
            model : newPlaylist,
            motormodel: newPlaylist,
            chassisnumber: newPlaylist,
            nextdate : newPlaylist
           },
          })
        }
        >
          登録
        </Button>
        </FormControl>
        </div>
    <Heading
        mb={3}
        bgClip="text"
        bgGradient={bgGradient}
        fontSize="6xl"
        fontWeight="extrabold"
        >
        DATABASE
        </Heading>  
      <Box  m={8} maxW="2xl" w="100%">
      <Table variant="simple" colorScheme="gray" size="sm"  bgColor= "white">
          <Thead>
            <Tr>
              <Th bgColor="pink.600" color="white" textAlign="center">
                使用者
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              住所
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              車両番号
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              初年度
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              車　　名
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              型式指定番号
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              類別区分番号
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              型式
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              原動機型式
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
              車台番号
              </Th>
              <Th bgColor="gray.600" color="white" textAlign="center">
              次回車検日
              </Th>
            </Tr>
            </Thead>
            {data.shixyakenn.map((post) => {
              return (
                <Tr key={post.id}>
                <Td  bgColor="gray.600" color="white" textAlign="center" >      
                <Input
                value={post.user}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                </Td>
                <Td  bgColor="gray.600" color="white" textAlign="center" >
                <Input
                value={post.address}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                <Td  bgColor="gray.600" color="white" textAlign="center" >
                <Input
                value= {post.vehiclenumber}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                <Td  bgColor="gray.600" color="white" textAlign="center" >
                <Input
                value={post.firstyear}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                <Td  bgColor="gray.600" color="white" textAlign="center" >
                <Input
                value={post.carname}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                <Td  bgColor="gray.600" color="white"textAlign="center" >
                <Input
                value={post.modelnumber}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                <Td  bgColor="gray.600" color="white"textAlign="center" >
                <Input
                value={post.classnumber}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                <Td  bgColor="gray.600" color="white" textAlign="center" >
                <Input
                value={post.model}
                 />
                  </Td>
                <Td  bgColor="gray.600" color="white" textAlign="center" >
                <Input
                value={post.motormodel}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                <Td  bgColor="gray.600" color="white" textAlign="center" >
                <Input
                value={post.chassisnumber}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                <Td  textAlign="center" >
                <Input
                value={post.nextdate}
                variant='flushed'
                size='md'
                htmlSize={20} 
                width='auto'
                 />
                  </Td>
                </Tr>
                );
              })}
              
            </Table>
            </Box>

     </div>
    </>
  );
};
*/
const AboutPage:NextPage = ()  => { 

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }

 
  const bgGradient = useColorModeValue("linear(to-l, blue.400, #7928CA,#FF0080)", "linear(to-r, blue.400, #7928CA,#FF0080)")
  return(
    <>
    
    <div>

   

     </div>
    </>
  );
};
export default AboutPage
