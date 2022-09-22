import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { ChakraProvider } from "@chakra-ui/react"; 
import theme from "./theme";
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
  FormControl
} from "@chakra-ui/react";
// Chakra icons を import
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
// React Hook Form を import
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import prisma from "./lib/prisma";
import { NextPage } from 'next';
//import { gql} from '@apollo/client';



// FormValues の型
type FormValues = {
  itemRows: {
    itemName: string;
    unitPrice: number;
    quantity: number;
    amount: number;
    taxAmount: number;
  }[];
};
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
 s   }
  }
`
*/


// すべてのアイテムの金額を合計する TotalAmount コンポーネント
const TotalAmount = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "itemRows",
    control
  });
  const total = formValues.reduce(
    (acc, { unitPrice, quantity }) => acc + (unitPrice || 0) * (quantity || 0),
    0
  );
  return (
    <Text fontSize="sm">
      {total}
      <small>円</small>
    </Text>
  );
};

// すべてのアイテムの消費税を合計する TotalTaxAmount コンポーネント
const TotalTaxAmount = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "itemRows",
    control
  });
  const total = formValues.reduce(
    (acc, { unitPrice, quantity }) =>
      acc + Math.floor(((unitPrice || 0) * (quantity || 0) * 1.1) / 100),
    0
  );
  return (
    <Text fontSize="sm">
      {total}
      <small>円</small>
    </Text>
  );
};

// すべてのアイテムの小計 + 消費税を合計する TotalTaxAmount コンポーネント
const AllTotalAmount = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "itemRows",
    control
  });
  const total = formValues.reduce(
    (acc, { unitPrice, quantity }) =>
      acc +
      (unitPrice || 0) * (quantity || 0) +
      Math.floor(((unitPrice || 0) * (quantity || 0) * 1.1) / 100),
    0
  );
  return (
    <Text fontSize="sm">
      {total}
      <small>円</small>
    </Text>
  );
};
/*
<form
onSubmit={(event) => {
  event.preventDefault();
  if (!Input || !value.trim()) return;
  ({ variables: { type: value } });
  setvalue ='';
}}
  >
  */ 
const IndexPage:NextPage = () => {



  useEffect(() => {
    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', (_event, args) => {
      alert(args)
    })
  }, [])

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { isValid }
  } = useForm<FormValues>({
    defaultValues: {
      itemRows: [{ itemName: "シュークリーム", quantity: 1, unitPrice: 200 }]
    },
    mode: "onBlur"
  });
  const { fields, append, remove } = useFieldArray({
    name: "itemRows",
    control
  });

  // itemRowsの入力状態を監視させる
  const watchFieldArray = watch("itemRows");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
  });


  return (
    <>
    <div>
      <Flex justify-content = 'flex-start' align='center' >
      <Text as='h1' >
      請求明細書
      </Text>
      </Flex>
      <Flex>
      <Text  >
      お客様情報
      </Text>
      </Flex>
      <Flex>

      <Flex
      justify-content ='flex-start'
      >

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
        <Input  placeholder="名前" variant='flushed'  bgColor="gray.600" type="text"/>
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="住所" variant='flushed'  bgColor="gray.600"  type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="車両番号" variant='flushed' bgColor="gray.600"  type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="初年度" variant='flushed'  bgColor="gray.600" type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="車　　名" variant='flushed'  bgColor="gray.600" type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="型式指定番号" variant='flushed'  bgColor="gray.600" type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="類別区分番号" variant='flushed'  bgColor="gray.600" type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="型式" variant='flushed'  bgColor="gray.600" type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="原動機型式" variant='flushed'  bgColor="gray.600" type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="車台番号" variant='flushed'  bgColor="gray.600" type="text" />
        </Td>
        <Td  bgColor="gray.600" color="white" textAlign="center" >
        <Input placeholder="次回車検日" variant='flushed'  bgColor="gray.600" type="text" />
        </Td>
        </Table>

      </Flex>

    </Flex>
    <Box m={8} maxW="2xl" w="100%">
      <form onSubmit={handleSubmit(onSayHiClick)}>
        <Table variant="simple" colorScheme="gray" size="sm" bgColor="gray.600">
          <Thead>
            <Tr>
              <Th bgColor="pink.600" color="white" textAlign="center">
                商品・技術名
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
                単価
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
                数量
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
                金額
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
                消費税
              </Th>
              <Th bgColor="pink.600" color="white" textAlign="center">
                削除
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {controlledFields.map((field, index) => {
              return (
                <Tr key={field.id}>
                  <Td  bgColor="gray.600">
                    <Input
                      placeholder="アイテムを入力して下さい"
                      {...register(`itemRows.${index}.itemName` as const, {
                        required: true
                      })}
                      size="sm"
                      bgColor="gray.600"
                    />
                  </Td>
                  <Td isNumeric  bgColor="gray.600">
                    <Input
                      type="number"
                      {...register(`itemRows.${index}.unitPrice` as const, {
                        valueAsNumber: true,
                        required: true
                      })}
                      size="sm"
                      width="16"
                      bgColor="gray.600"
                    />
                  </Td>
                  <Td isNumeric  bgColor="gray.600">
                    <Input
                      placeholder="quantity"
                      type="number"
                      {...register(`itemRows.${index}.quantity` as const, {
                        valueAsNumber: true,
                        required: true
                      })}
                      size="sm"
                      width="12"
                      min="0"
                      max="10"
                      bgColor="gray.600"
                    />
                  </Td>
                  <Td isNumeric  bgColor="gray.600">
                    <Input
                      type="number"
                      {...register(`itemRows.${index}.amount` as const, {
                        valueAsNumber: true,
                        required: true
                      })}
                      value={(field.unitPrice || 0) * (field.quantity || 0)}
                      {...register(`itemRows.${index}.amount` as const, {
                        valueAsNumber: true,
                        required: true
                      })}
                      size="sm"
                      width="24"
                      bgColor="gray.600"
                    />
                  </Td>
                  <Td isNumeric  bgColor="gray.600">
                    <Input
                      type="number"
                      {...register(`itemRows.${index}.taxAmount` as const, {
                        valueAsNumber: true,
                        required: true
                      })}
                      value={Math.floor(
                        ((field.unitPrice || 0) * (field.quantity || 0) * 10) /
                          100
                      )}
                      {...register(`itemRows.${index}.taxAmount` as const, {
                        valueAsNumber: true,
                        required: true
                      })}
                      size="sm"
                      width="16"
                      bgColor="gray.600"
                    />
                  </Td>
                  <Td textAlign="center"  bgColor="gray.600">
                    {/* クリックで行を削除するIconButtonを2行目から表示 */}
                    {index > 0 && (
                      <IconButton
                        aria-label="delete"
                        icon={<DeleteIcon />}
                        colorScheme="gray"
                        type="button"
                        onClick={() => remove(index)}
                        size="sm"
                      />
                    )}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Button
          colorScheme="pink"
          variant="ghost"
          size="xs"
          onClick={() =>
            // クリックで行が増える
            // 増やした行の初期値を設定
            append({
              itemName: "",
              quantity: 0,
              unitPrice: 0,
              amount: 0,
              taxAmount: 0
            })
          }
          leftIcon={<AddIcon />}
        >
          行を追加
        </Button>
        </form>
        <Flex justifyContent="flex-end">
          <Table size="sm" mt={12} width={240} bgColor="gray.600">
            <Tbody>
              <Tr>
                <Th bgColor="pink.600" color="white">
                  小計
                </Th>
                <Td isNumeric>
                  <TotalAmount control={control} />
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Th bgColor="pink.600" color="white">
                  消費税
                </Th>
                <Td isNumeric>
                  <TotalTaxAmount control={control} />
                </Td>
              </Tr>
              <Tr>
                <Th bgColor="pink.600" color="white">
                  合計
                </Th>
                <Td isNumeric>
                  <AllTotalAmount control={control} />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
        <Button type="submit" colorScheme='pink' disabled={!isValid}>
          送信
        </Button>
    </Box>
    </div>
    </>
  )
}

export default IndexPage
