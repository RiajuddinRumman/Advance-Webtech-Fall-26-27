MD. RIAJUDDIN RUMMAN
23-54604-3
Section - E


Copied the boiler plate into the directory.
Then,created the modules using :
nest g resource module employees
nest g resource module products

Started postgres server using : 
brew services start postgres -> Opening and listening to 5432 port

Configured necessary components.
run : pnpm migration:run -> for running migration
run : pnpm run start:dev -> for building and running the server

Ran postman, sent api request to url: http://localhost:5001/employees & http://localhost:5001/products. All api requests were satisfied.

Attaching all the necessary Screenshots :


<img width="1440" height="900" alt="serverRunning" src="https://github.com/user-attachments/assets/c9cc0360-e50b-48d2-97f8-5951eedd2cc6" />
<img width="1440" height="900" alt="post-products" src="https://github.com/user-attachments/assets/17a2869a-5ef8-4ad4-b17b-2a5115ad40e3" />
<img width="1440" height="900" alt="post-employees" src="https://github.com/user-attachments/assets/df4d1f1b-bba6-4890-b969-e2b4d8852821" />
<img width="1440" height="900" alt="patch-products" src="https://github.com/user-attachments/assets/a00e2582-edfe-4c9f-b4ff-ca5546a899d7" />
<img width="1440" height="900" alt="patch-confirmUpdate-employees" src="https://github.com/user-attachments/assets/9ee9487e-3db6-47be-b3ee-ddb6b0a727f9" />
<img width="1440" height="900" alt="migration-success" src="https://github.com/user-attachments/assets/13b48e69-d4ad-4c8f-87da-4dfbb8a600b8" />
<img width="1440" height="900" alt="get-getbyid-products" src="https://github.com/user-attachments/assets/a18e6e21-e8a5-415a-bb7b-a0d7643f7828" />
<img width="1440" height="900" alt="get-getbyid-employees" src="https://github.com/user-attachments/assets/3b529b4c-c615-4c27-bfd7-606795fff555" />
<img width="1440" height="900" alt="delete-confirmdelete-products" src="https://github.com/user-attachments/assets/5556d60b-9e16-4c85-a8c2-7557febfd254" />
<img width="1440" height="900" alt="delete-confirmDelete-employees" src="https://github.com/user-attachments/assets/b8e374a6-bc67-41be-8fee-a5d711a9af58" />
<img width="1440" height="900" alt="dbs-running-showing-tables" src="https://github.com/user-attachments/assets/163222ba-8367-4654-be25-6dec454f71c7" />


