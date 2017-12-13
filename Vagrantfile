Vagrant.configure("2") do |config|
  config.vm.define 'main' do |main|
    main.vm.box = "ubuntu/xenial64"
    main.vm.network "private_network", type: "dhcp"
    main.vm.network :forwarded_port, guest: 80, host: 8000
    main.vm.provision :shell, path: "bootstrap_main.sh"
    config.vm.provider "virtualbox" do |v|
        v.memory = 2048
        v.cpus = 2
    end
  end
  config.vm.define 'app_server_1' do |app_server_1|
    app_server_1.vm.box = "ubuntu/xenial64"
    app_server_1.vm.network "private_network", type: "dhcp"
    app_server_1.vm.network :forwarded_port, guest: 3000, host: 3000
    app_server_1.vm.provision :shell, path: "bootstrap_app.sh"
    config.vm.provider "virtualbox" do |v|
        v.memory = 2048
        v.cpus = 2
    end
  end
  config.vm.define 'app_server_2' do |app_server_2|
    app_server_2.vm.box = "ubuntu/xenial64"
    app_server_2.vm.network "private_network", type: "dhcp"
    app_server_2.vm.network :forwarded_port, guest: 3010, host: 3010
    app_server_2.vm.provision :shell, path: "bootstrap_app.sh"
    config.vm.provider "virtualbox" do |v|
        v.memory = 4096
        v.cpus = 4
    end
  end
end

