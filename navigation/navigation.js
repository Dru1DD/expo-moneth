import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useStore } from "../hooks";
import { Tabs } from "./tabs";
import i18n from 'i18n-js';
import { SplashScreen } from "../screens/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultAccounts, defaultCurrency, defaultCatagoryList, defaultIncomeCatagoryList } from "../constants/defaultValues";

export const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { transactions, accounts, catagories, language } = useStore()

  useEffect(() => {
    const timeout = setTimeout(async () => {
        try {
            const langAsync = await AsyncStorage.getItem('@MyStore:Language')
            const langData = langAsync != null ? langAsync : "ua"

            const transactionsData = await AsyncStorage.getItem('@MyStore:Transactions')
            const transactionList = transactionsData != null ? JSON.parse(transactionsData) : []

            const accountsData = await AsyncStorage.getItem('@MyStore:Accounts')
            const accountsList = accountsData != null ? JSON.parse(accountsData) : defaultAccounts

            const exspenseCatagoriesData = await AsyncStorage.getItem('@MyStore:ExspenseCatagories')
            const exspenseCatagories = exspenseCatagoriesData != null ? JSON.parse(exspenseCatagoriesData) : defaultCatagoryList
            const incomeCatagoriesData = await AsyncStorage.getItem('@MyStore:IncomeCatagories')
            const incomeCatagories = incomeCatagoriesData != null ? JSON.parse(incomeCatagoriesData) : defaultIncomeCatagoryList
            
            await language.updateLanguage(langData.code)
            await transactions.setTransactionsData(transactionList)
            await accounts.setAccountsData(accountsList)
            await accounts.updateCurrency(defaultCurrency)

            i18n.locale = language.activeLanguage
            // i18n.fallbacks = language.activeLanguage
            // i18n.currentLocale = language.activeLanguage /

            if(exspenseCatagories && incomeCatagories) {
              await catagories.setDefaultCatagories(exspenseCatagories, incomeCatagories)
            }

            setIsLoading((prev) => !prev)
        } catch (e) {
            alert(e)
        }
    }, 2000)

    return () => clearTimeout(timeout)
  }, []);
  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  );
};
