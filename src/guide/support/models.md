# Models

## User 用户

`App\Models\Trait\UserServiceTrait`

### 添加用户

`User::createUser($data);`

### 添加患者

`User::addPatient($data);`

### 删除患者

`User::deletePatient($patientId);`

## 添加亲属

`User::addPatientFamilyUser($patientId, $data);`
