# AudioSignalProcessing
=======================

This is the repository for MTEC-360/660-01: Audio Signal Processing at CalArts MTIID, and holds all the starter code for the chuck assignments. 

This course is based off of Will Pirkle's excellent book "Designing Audio Effect Plug-Ins in C++."

* Week 1:  Brew, Git, and Vim
* Week 2:  FIR and IIR Filters 
* Week 3:  Basic DSP 1
* Week 4:  Basic DSP 2
* Week 5:  IIR Filter Design
* Week 6:  Delays and Circular Buffers
* Week 7:  FIR Filter Design
* Week 8:  Oscillators
* Week 9:  Modulated Delay FXs
* Week 10: Reverb
* Week 11: Modulated Filter FXs
* Week 12: Dynamics
* Week 13: Final Projects
* Week 14: Final Projects

chuck.vim
---------

Your TA (Eric) recommends using the [chuck.vim](https://github.com/wilsaj/chuck.vim) plugin.

I've outlined directions for a [vundle](https://github.com/gmarik/vundle) install, you could also install chuck.vim with Pathogen if so desired.

To install vundle via terminal.

    $ git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim

Then add the following repos to your ~.vimrc

    " vundle up
    filetype off
    set rtp+=~/.vim/bundle/Vundle.vim
    call vundle#begin()

    " let vundle manage itself
    Plugin 'gmarik/Vundle.vim'
    Plugin 'wilsaj/chuck.vim'

    call vundle#end()
    filetype plugin indent on
    syntax on

Then install using vundle inside vim.

    :BundleInstall

With the plugin installed, you can use `\r` to run ChucK files inside of vim!

Eric's TA hours are from 6:00-8:00 on Wednesdays, and can help you get this setup.
