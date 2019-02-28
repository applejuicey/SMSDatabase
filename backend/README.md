#### 1. Download example & install dependencies
Clone the repository:  
```
git clone git@github.com:applejuicey/SMSDatabase.git
```
Install Node dependencies:  
```
cd backend
npm install
```
#### 2. Launch Prisma with Docker
First you should have Docker installed. Then launch the containers:
```
cd backend
docker-compose up -d
```
#### 3. Install the Prisma CLI
Install the Prisma CLI:
```
npm install -g prisma
```
#### 4. Set up database & deploy Prisma datamodel
To deploy the datamodel, run the following command:
```
prisma deploy
```
#### 5. Run the script
Execute the script with this command:
```
npm run start
```