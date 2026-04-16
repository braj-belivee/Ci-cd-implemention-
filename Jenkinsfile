pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Clean Old') {
            steps {
                sh 'docker-compose -f Docker-compose.yaml down || true'
            }
        }

        stage('Debug Files') {
            steps {
                sh 'pwd'
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose -f Docker-compose.yaml up -d'
            }
        }

        stage('Wait') {
            steps {
                sh 'sleep 15'
            }
        }
    }

    post {
        always {
            sh 'docker-compose down -f Docker-compose.yaml || true'
        }
    }
}