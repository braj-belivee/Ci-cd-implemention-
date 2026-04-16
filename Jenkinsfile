pipeline {
    agent any

    stages {
        stage('install dep') {
            steps {
                echo 'install' 
            }
        }
        stage('test') {
            steps {
                echo 'testing'
                // sh 'npm test'
            }
        }
        // stage('Remove old files') {
        //     steps {
        //         sh 'docker-compose down || true'
        //     }
        // }
        stage('deploy') {
            steps {
                echo "deploying the application"
                // sh 'docker-compose up -d'
            }
        }
    }
}