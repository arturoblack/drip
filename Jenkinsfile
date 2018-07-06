pipeline {
  agent any
  stages {
    stage('Seccion de admision') {
      steps {
        sh 'echo hola'
      }
    }
    stage('Creacion de cuentas') {
      parallel {
        stage('Creacion de AD') {
          steps {
            sh 'echo hola'
          }
        }
        stage('Creacion de cuenta de correo') {
          steps {
            echo 'echo hola'
          }
        }
      }
    }
    stage('Inscripcion en seccion de admision') {
      steps {
        sh 'echo hola'
      }
    }
    stage('Servicios Web') {
      parallel {
        stage('Inscripcion en moodle') {
          steps {
            sh 'echo hola'
          }
        }
        stage('inscripcin en Test de admision') {
          steps {
            sh 'echo hola'
          }
        }
      }
    }
    stage('Correo de confimacion') {
      steps {
        sh 'echo hola'
      }
    }
  }
}