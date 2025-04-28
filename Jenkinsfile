pipeline {
    agent any

    stages {
        stage('Preparation') {
            steps {
                echo 'Preparing workspace and environment...'
            }
        }

        stage('Checkout Source Code') {
            steps {
                git branch: 'main', url: 'https://github.com/dieglevel/struct-and-design-software-fe-client.git'
            }
        }

        stage('Setup Environment Variables') {
            steps {
                configFileProvider([configFile(fileId: 'struct-and-design-software-fe-client', targetLocation: '.env')]) {
                    sh '''
                    echo "Environment file (.env) copied successfully!"
                    ls -la
                    cat .env
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                    docker-compose build
                    '''
                }
            }
        }

        stage('Remove Old Containers') {
            steps {
                script {
                    sh '''
                    docker-compose down
                    '''
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sh '''
                    docker-compose up -d
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
