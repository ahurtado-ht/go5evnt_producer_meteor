prerrequisitos
  instalacion dependencias sistema operativo
		linux:
			sudo dnf -y install gcc-c++
			sudo dnf -y install make
		windows
			dotnetfw sdk 2 (windows only)
				- https://www.microsoft.com/en-US/download/details.aspx?id=19988
				- add the compiler path to system path.:C:\Program Files\Microsoft Visual Studio 10.0\VC\bin
				- execute the vcvarsall.bat
					(C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\vcvarsall.bat)

	instalacion utilitarios
		- git
		- curl
		- python 2

		linux
			# sudo dnf -y install git
			# sudo dnf -y install curl
			# sudo dnf -y install python2
		windows
			instaladores respectivos (se recomienda python 2.7.10 instlado y en path de usuario)


	nodejs 5.4.0 (instalado y en path de usuario)
		(linux, descargar y editar el archivo /etc/profile adicionando path
			export PATH=/.work/node-v5.4.0-linux-x64/bin:$PATH:
		)
	instalar meteor
		  linux: curl https://install.meteor.com/ | sh
		  windows: con el instalador

	instalar ide
		(atom:recommended)
			- wndows: installer
			- linux: install the rpm


scaffold
	meteor create go5evnt_producer_meteor
  #
	meteor add iron:router 					# mecanismo de routing
	meteor add accounts-password		# gestion de usuarios
	meteor add ian:accounts-ui-bootstrap-3		# gestion de usuarios (alternativa a accounts-ui)
	meteor add underscore						# algunas facilidades js
	meteor add twbs:bootstrap 			# layout
	meteor add sacha:spin   				# loader spinner
  #
	meteor remove autopublish
  meteor remove insecure
  #
  meteor remove npm-container	 		# manejo de dependencias npm
	meteor update meteorhacks:npm	 	# manejo de dependencias npm
	meteor add meteorhacks:npm			# manejo de dependencias npm
	#
	meteor add aldeed:autoform			# forms mgmt
	meteor add aldeed:collection2		# forms mgmt
	meteor add tsega:bootstrap3-datetimepicker@=3.1.3_3
	meteor add aldeed:autoform-bs-datetimepicker
	#
	meteor add osv:mongo-counter		# manejo de secuencias de numeros
	meteor add momentjs:moment			# utilitarios para calculos de tipos date

scaffold alternativa 2 (TODO: pendiente verificar)
	npm install -g iron-meteor
	iron create go5evnt_producer_meteor

inicio
	meteor reset 								# limpiar la db de desarrollo
	meteor mongo 								# cliente mongo-consola

	#minimongo
	meteor 											#iniciar la app
	# usuarios
 	luego crear usuario 				# (admin/Welcome1@)
