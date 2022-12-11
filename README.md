# Nimblex
Javascript Cucumber

# Run Test
 "npm run test"
 "npm run test-uat1"

# Clear Terminal
        Cntrl + l

# Change Feature file names according to the folder  
"const sourceSpecDirectory = `tests/features/featureFiles/smokeTest`;"


# Change Step definition file name according to the folder
"cucumberOpts: {
        require: ['./tests/features/regression_testing/sprint0.js', './tests/features/support/*.js'],"   
                        or
"cucumberOpts: {
        require: ['./tests/features/step_definitions/loginSD.js', './tests/features/support/*.js'], "


# Generate Allure report 
after execution please run this command in the terminal:
"allure generate && allure open" or "npm run open-Allure"

