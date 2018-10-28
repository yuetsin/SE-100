//
//  ViewController.swift
//  CrudeHexConverter
//
//  Created by yuxiqian on 2018/10/28.
//  Copyright © 2018 yuxiqian. All rights reserved.
//

import Cocoa
import WebKit

class ViewController: NSViewController {

    
    let contentHTML: String = "https://tool.oschina.net/hexconvert/"
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let request = URLRequest(url: URL(string: contentHTML)!)
        webView.load(request)
    }

    @IBOutlet weak var webView: WKWebView!
    
    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }
}

